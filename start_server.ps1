$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8088/")
$listener.Start()
Write-Host "Server started on http://localhost:8088/"
while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $reqPath = $request.Url.LocalPath
        if ($reqPath -eq "/") { $reqPath = "/index.html" }
        $localPath = "c:\Users\VISHNU\Desktop\demo\ERP" + $reqPath.Replace('/', '\')
        
        if (Test-Path $localPath) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            switch ($ext) {
                ".html" { $response.ContentType = "text/html; charset=utf-8" }
                ".css"  { $response.ContentType = "text/css" }
                ".js"   { $response.ContentType = "application/javascript" }
                ".png"  { $response.ContentType = "image/png" }
                ".jpg"  { $response.ContentType = "image/jpeg" }
                ".jpeg" { $response.ContentType = "image/jpeg" }
                ".webp" { $response.ContentType = "image/webp" }
                ".svg"  { $response.ContentType = "image/svg+xml" }
                ".woff" { $response.ContentType = "font/woff" }
                ".woff2"{ $response.ContentType = "font/woff2" }
                ".ttf"  { $response.ContentType = "font/ttf" }
                default { $response.ContentType = "application/octet-stream" }
            }
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    } catch {
        # ignore context errors
    }
}

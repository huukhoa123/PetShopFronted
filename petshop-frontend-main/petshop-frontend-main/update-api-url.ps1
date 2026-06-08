# Powershell script để tự động thay đổi URL API localhost sang IP VPS của bạn
$vpsIp = "180.93.37.143"

$oldUrl = "http://localhost:8080"
$newUrl = "http://$vpsIp:8080"

Get-ChildItem -Path . -Filter *.html | ForEach-Object {
    $content = Get-Content -Path $_.FullName -Raw
    if ($content.Contains($oldUrl)) {
        Write-Host "Đang cập nhật API URL trong: $($_.Name)"
        $content = $content.Replace($oldUrl, $newUrl)
        Set-Content -Path $_.FullName -Value $content
    }
}

Get-ChildItem -Path . -Filter *.js | ForEach-Object {
    $content = Get-Content -Path $_.FullName -Raw
    if ($content.Contains($oldUrl)) {
        Write-Host "Đang cập nhật API URL trong file JS: $($_.Name)"
        $content = $content.Replace($oldUrl, $newUrl)
        Set-Content -Path $_.FullName -Value $content
    }
}

Write-Host "Hoàn thành! Tất cả các file đã được cập nhật sang URL mới: $newUrl"

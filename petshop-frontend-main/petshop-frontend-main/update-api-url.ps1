# Powershell script để tự động thay đổi URL API localhost sang IP VPS của bạn
$vpsIp = "YOUR_VPS_IP_HERE"  # <- Thay bằng IP VPS của bạn ở đây (ví dụ: "123.45.67.89")

$oldUrl = "http://localhost:8080"
$newUrl = "http://$vpsIp:8080"

if ($vpsIp -eq "YOUR_VPS_IP_HERE") {
    Write-Error "Vui lòng mở file script này lên và sửa 'YOUR_VPS_IP_HERE' thành IP VPS thật của bạn trước khi chạy!"
    exit
}

Get-ChildItem -Path . -Filter *.html | ForEach-Object {
    $content = Get-Content -Path $_.FullName -Raw
    if ($content.Contains($oldUrl)) {
        Write-Host "Đang cập nhật API URL trong: $($_.Name)"
        $content = $content.Replace($oldUrl, $newUrl)
        Set-Content -Path $_.FullName -Value $content
    }
}

Write-Host "Hoàn thành! Tất cả các file HTML đã được cập nhật sang URL mới: $newUrl"

# Linux

在Linux伺服器上架設心理測驗網站，以php進行後端串，接傳輸資料到資料庫進行儲存。

## 程式碼

```bash=
# 主要頁面
index.html

# 版面配置
styles.css

# 動態網頁驅動
psychTest.js

# 後端傳輸
save_result.php
```

## 安裝指南

以下為Linux指令：
```
# 更新套件
sudo apt update

# 安裝 PHP 和 Apache PHP 模組
sudo apt install php php-mysql libapache2-mod-php

# 重新啟動Apache
sudo systemctl restart apache2

# 確認PHP安裝成功
php -v

# PHP測試檔
echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/test.php

# 設定適當的檔案權限
sudo chown www-data:www-data /var/www/html/test.php
sudo chmod 644 /var/www/html/test.php
```

補充：

設定適當的檔案權限是為了：

1. 安全性考量：

如果權限設定太寬鬆（例如 777），任何人都可以讀取、寫入和執行檔案，這可能導致惡意使用者修改或刪除您的檔案、被植入惡意程式碼。


2. 功能性要求：

如果權限太嚴格（例如 600），Apache 伺服器可能無法讀取檔案，會導致網頁無法正常顯示，PHP 檔案可能無法執行。

644 = 檔案擁有者可讀寫，群組和其他人只能讀取。
755 = 檔案擁有者可讀寫執行，群組和其他人可讀取和執行。
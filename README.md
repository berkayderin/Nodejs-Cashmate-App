# Cashmate Uygulaması

## Genel Bakış

Cashmate, kullanıcıların finansal işlemlerini yönetmelerine yardımcı olan bir web tabanlı uygulamadır. Node.js ve Express.js altyapısı kullanılarak geliştirilmiş olup, EJS templating engine ile dinamik içerik sunumu sağlar. Google OAuth ile güvenli kullanıcı doğrulaması, MongoDB ile veri depolama özelliklerine sahiptir.

## Özellikler

- **Google OAuth İle Güvenli Giriş**: Kullanıcılar, Google hesapları ile güvenli bir şekilde oturum açabilirler.
- **MVC Mimarisi**: Uygulama, modüler bir yapıda MVC (Model-View-Controller) mimarisi kullanır.
- **EJS Şablonları**: Dinamik web sayfaları için EJS kullanılır.
- **MongoDB Veritabanı**: Verilerin depolanması ve yönetimi için MongoDB kullanılır.
- **Session Yönetimi**: Kullanıcı oturum bilgileri MongoDB'de güvenli bir şekilde saklanır.
- **CRUD İşlemleri**: Kullanıcılar, kendi finansal işlemlerini oluşturabilir, okuyabilir, güncelleyebilir ve silebilir.

## Kurulum

### Gereklilikler

- Node.js
- npm (Node.js ile birlikte gelir)
- MongoDB

### Yükleme Adımları

1. Repo'yu klonlayın:
   ```bash
   git clone https://example.com/cashmate-app.git
   cd cashmate-app
   ```

2. Bağımlılıkları yükleyin:
  ```bash
  npm install
  ```
3. .env dosyasını oluşturun ve gerekli çevre değişkenlerini ekleyin:
  ```bash
  MONGODB_URI=mongodb://your-mongodb-uri
  GOOGLE_CLIENT_ID=your-google-client-id
  GOOGLE_CLIENT_SECRET=your-google-client-secret
  GOOGLE_CALLBACK_URL=http://your-domain.com/auth/google/callback
  SESSION_SECRET=your-random-secret
  ```

4. Uygulamayı başlatın:
  ```bash
  npm start
  ```

### Kullanım
Uygulamayı başlattıktan sonra tarayıcınızda http://localhost:5000 adresine giderek Cashmate'e erişebilirsiniz. Google ile oturum açarak tüm finansal yönetim araçlarına erişim sağlayabilirsiniz.

### Destek
Teknik destek veya kullanıcı desteği gerektiğinde, derinberkay67@gmail.com adresine e-posta göndererek bizimle iletişime geçebilirsiniz.

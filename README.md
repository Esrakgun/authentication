## 🔐 Authentication App :

Clerk & Next.js ile Modern Kimlik Doğrulama ve Routing Mimarisi

Bu proje, Next.js App Router mimarisi kullanılarak geliştirilmiş, modern bir authentication (kimlik doğrulama) ve routing odaklı web uygulamasıdır.

Uygulamanın temel amacı yalnızca kullanıcı giriş–kayıt işlemlerini yapmak değil;
aynı zamanda gerçek bir uygulamada authentication sonrası veri çekme, routing yönetimi ve kullanıcı etkileşimi süreçlerini bütünlüklü şekilde deneyimlemektir.

Authentication altyapısı olarak Clerk Authentication kullanılmıştır.

---

## 🎯 Projenin Akademik Amacı:

Bu proje ile aşağıdaki konuların uygulamalı olarak öğrenilmesi hedeflenmiştir:

Modern authentication sistemlerinin çalışma mantığı

Next.js App Router mimarisi

Client ve Server Component ayrımı

Routing türlerinin (Parallel, Dynamic, Interception, Group) gerçek kullanım senaryoları

Authentication sonrası veri akışı ve kullanıcı etkileşimi

API entegrasyonu ile içerik yönetimi

Bu yönüyle proje, yalnızca bir uygulama değil;
öğretici ve referans niteliğinde bir çalışma olarak ele alınmıştır.

---

## 🔐 Authentication Katmanı – Clerk:
🧩 Clerk Authentication Nedir?

Clerk, modern web uygulamaları için geliştirilmiş, hazır bir kimlik doğrulama ve kullanıcı yönetimi servisidir.
Geliştiricinin authentication altyapısını sıfırdan yazmasına gerek kalmadan, güvenli ve ölçeklenebilir bir yapı sunar.

---

## 🔑 Bu Projede Clerk ile Yapılanlar:

📩 E-mail & şifre ile Sign-up / Sign-in

🔐 Doğrulama kodu (email verification)
→ Zorunlu değil, opsiyonel olarak yapılandırıldı

🌐 Google gibi sosyal giriş seçenekleri

👤 Kullanıcı profil yönetimi

Profil adı değiştirme

Yeni e-mail ekleme

Mevcut e-mail düzenleme

🛡️ Güvenli session yönetimi

🔒 Protected route (korumalı sayfa) yapıları

🔑 .env dosyası ile gizli anahtar yönetimi

---

## 🧭 Routing Mimarisi (Next.js App Router):

Bu proje, Next.js’in modern routing yaklaşımını öğrenmek ve uygulamak üzerine kurgulanmıştır.

🔀 Parallel Routes

Aynı anda birden fazla UI alanının yönetilmesi

Authentication durumu ve içerik alanlarının paralel render edilmesi

Karmaşık layout yapılarının sade şekilde yönetilmesi

🧱 Group Routes

URL’e yansımayan klasör yapıları

Sayfaların mantıksal olarak gruplandırılması

Authentication, dashboard ve içerik alanlarının ayrıştırılması

🔁 Dynamic Routes

URL parametreleri ile dinamik sayfa üretimi

Kitap / roman ID’sine göre detay sayfaları

SEO uyumlu ve anlamlı URL yapıları

🪟 Interception Routes

Sayfa geçişi olmadan modal açılması

Roman listesine tıklandığında:

Arka plan sabit kalır

İçerik modal (intercepted) olarak açılır

Kullanıcı deneyimini bozmadan detay gösterimi

---

## 📚 API Entegrasyonu & İçerik Yönetimi:

Authentication süreci tamamlandıktan sonra uygulama, harici bir API üzerinden roman verilerini çekmektedir.

---

## 🔗 API ile Yapılanlar:

📡 API isteği ile roman verilerinin çekilmesi

📖 Roman listesi oluşturulması

🪟 Romanlara tıklandığında:

Interception Route ile modal açılması

---

## 🔍 Detay Sayfasında Gösterilen Bilgiler:

🔹Kitap adı

🔹Yazar

🔹Kategori

🔹Yayınlanma yılı

🔹Kitap kapağı (image)

🔹Kitap hakkında açıklama

Bu yapı sayesinde:

Liste → modal → detay sayfası akışı kurulmuştur

Modern ve kullanıcı dostu bir içerik deneyimi sağlanmıştır

---

## 🧠 Bu Projede Ne Öğrendim?:

Bu proje bana şunları kazandırdı:

Authentication’ın yalnızca login ekranı olmadığını

Gerçek projelerde authentication sonrası veri ve routing yönetiminin önemini

Next.js App Router’ın karmaşık routing senaryolarını nasıl sadeleştirdiğini

Client ve Server Component ayrımının pratikte nasıl çalıştığını

Modal, detay sayfası ve URL yönetiminin birlikte nasıl kurgulandığını

Hazır servislerin (Clerk gibi) bilinçli kullanımını

---

## 🛠️ Kullanılan Teknolojiler:

💻 Diller

🔹TypeScript

🔹JavaScript

⚙️ Framework & Kütüphaneler

🔹Next.js (App Router)

🔹React

🔹Clerk Authentication

🎨 Stil & Araçlar

🔹Tailwind CSS

---

## 🔑 Ortam Değişkenleri (Environment Variables):

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key


⚠️ Gizli anahtarlar public repository’lerde paylaşılmamalıdır.

---

## 🏁 Sonuç:

Bu proje;

🔹Authentication

🔹Routing

🔹API entegrasyonu

🔹Modern kullanıcı deneyimi

konularını tek bir uygulama içinde birleştiren,
öğretici ve referans niteliğinde bir çalışmadır.

📘 Kitapta yer alabilecek,
🧠 okuyan kişiye gerçekten bir şey katan,
🧩 modern frontend mimarisini gösteren
bir örnek olarak tasarlanmıştır.

---

## 📘 Bilgilendirme:

Bu proje özellikle Authentication altyapısı olarak Clerk Authentication kullanılmıştır.
Modern bir authentication (kimlik doğrulama) ve routing odaklı web uygulamasıdır.

---

## 💬 İletişim:
Proje ile ilgili sorularınız için: 📧 E-posta: akgundogduesr@gmail.com



---

## 🖼️Ekran görüntüleri:

🔹Fotograf:

<img width="1891" height="885" alt="C3" src="https://github.com/user-attachments/assets/8c6714d7-20ca-403c-9c65-ba47345007ed" />
<img width="804" height="673" alt="C2" src="https://github.com/user-attachments/assets/16387788-a109-4616-a544-8e34b16d5afc" />
<img width="729" height="773" alt="C1" src="https://github.com/user-attachments/assets/91e8275a-466e-47d4-8c3e-f29c37419c86" />

---

🔹Video:

https://github.com/user-attachments/assets/94df5c30-97a3-410e-9c1b-7d569160bf42


























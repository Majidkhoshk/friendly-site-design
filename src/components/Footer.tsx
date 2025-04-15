
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              بسوی سامیار سفر
            </div>
            <p className="text-foreground/70 mb-4">
              تجربه سفرهای فراموش‌نشدنی که الهام‌بخش و لذت‌بخش هستند.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">فیسبوک</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">توییتر</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">اینستاگرام</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">لینکدین</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Github size={20} />
                <span className="sr-only">گیت‌هاب</span>
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">شرکت</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">درباره ما</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">مشاغل</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">وبلاگ</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">مطبوعات</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">منابع</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">مستندات</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">مرکز راهنمایی</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">آموزش‌ها</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">جامعه</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">قانونی</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">سیاست حریم خصوصی</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">شرایط خدمات</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">سیاست کوکی</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} بسوی سامیار سفر. تمامی حقوق محفوظ است.
          </p>
          <p className="text-foreground/60 text-sm mt-4 md:mt-0">
            با عشق طراحی شده برای تجربه‌های سفر استثنایی ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

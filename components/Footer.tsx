"use client";

import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="bg-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/umrah-guide" className="text-muted-foreground hover:text-primary">
                  Umrah Guide
                </a>
              </li>
              <li>
                <a href="/hajj-guide" className="text-muted-foreground hover:text-primary">
                  Hajj Guide
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-muted-foreground hover:text-primary">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <WhatsAppButton 
              className="w-full mb-4"
              message="Hi, I need support regarding Hajj & Umrah packages"
            >
              WhatsApp Support
            </WhatsAppButton>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Hajj & Umrah Packages. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
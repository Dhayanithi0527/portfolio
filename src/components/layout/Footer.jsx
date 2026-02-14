import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        © {new Date().getFullYear()} Dhayanithi. All rights reserved.
                    </p>
                </div>
                {/* Social links removed as per request */}
            </div>
        </footer>
    );
}

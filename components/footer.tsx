'use client';
import Link from "next/link"
import { useTranslations } from "@/hooks/use-translations"

export function Footer() {
  const { t } = useTranslations()

  return (
    <footer className="w-full bg-gray-100 border-t">
      <div className="container py-4 mx-auto flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} YILSA. {t('footer.allRightsReserved')}
        </p>
        <div className="flex space-x-4">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition">
            {t('footer.privacyPolicy')}
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition">
            {t('footer.terms')}
          </Link>
        </div>
      </div>
    </footer>
  )
}

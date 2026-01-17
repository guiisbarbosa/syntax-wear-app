import iconInstagram from "@/assets/images/icon-instagram.png";
import iconFacebook from "@/assets/images/icon-facebook.png";
import iconTiktok from "@/assets/images/icon-tiktok.png";
import iconWhatsapp from "@/assets/images/icon-whatsapp.png";

const socialLinks = [
  { href: "#", icon: iconInstagram, name: "Instagram" },
  { href: "#", icon: iconFacebook, name: "Facebook" },
  { href: "#", icon: iconTiktok, name: "TikTok" },
  { href: "#", icon: iconWhatsapp, name: "WhatsApp" },
];

export const SocialLinks = () => {
  return (
    <div className="mb-4 md:mb-0">
      <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>
      <ul className="flex gap-5">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} aria-label={link.name}>
              <img src={link.icon} alt={link.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faXmark,
  faAddressCard,
  faBullseye,
  faTag,
  faHouse,
  faArrowUpFromBracket,
  faUser,
  faBars,
  faCalendarDays,
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faPhoneSlash,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faArrowUpFromBracket,
  faHouse,
  faAddressCard,
  faBullseye,
  faTag,
  faXmark,
  faUser,
  faCalendarDays,
  faBars,
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faPhoneSlash,
  faInstagram as IconDefinition,
  faFacebook as IconDefinition,
  faWhatsapp as IconDefinition
);

export { FontAwesomeIcon };

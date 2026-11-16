import { createAvatar } from "@dicebear/core";
import * as avataaars from "@dicebear/avataaars";

window.BayanAvatar = {
  render(options, overlayOptions) {
    const avatar = createAvatar(avataaars, options).toString();
    if (!overlayOptions) return avatar;
    const overlay = createAvatar(avataaars, { ...options, ...overlayOptions }).toString();
    const topGroup = /(<g transform="translate\(-1\)">)([\s\S]*?)(<\/g>)/;
    const overlayTop = overlay.match(topGroup);
    if (!overlayTop) throw new Error("Unable to compose the avatar headwear layer.");
    return avatar.replace(topGroup, (_, open, content, close) =>
      `${open}${content}${overlayTop[2]}${close}`);
  }
};

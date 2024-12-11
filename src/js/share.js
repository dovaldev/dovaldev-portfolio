function shareOnWhatsApp(url) {
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
  window.open(whatsappUrl, '_blank');
}

function shareOnFacebook(url) {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookUrl, '_blank');
}

function shareOnLinkedIn(url) {
  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`;
  window.open(linkedInUrl, '_blank');
}

function shareOnTwitter(url) {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
  window.open(twitterUrl, '_blank');
}

function shareOnEmail(url) {
  const emailUrl = `mailto:?subject=Check%20this%20out&body=${encodeURIComponent(url)}`;
  window.open(emailUrl, '_self');
}

export { shareOnWhatsApp, shareOnFacebook, shareOnLinkedIn, shareOnTwitter, shareOnEmail };

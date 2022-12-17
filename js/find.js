var jumlah_iklan = 11;
var waktu_sekarang = new Date()
var detik = waktu_sekarang.getSeconds(3)
var pasang_iklan = detik % jumlah_iklan;
pasang_iklan += 1;
if (pasang_iklan == 1) {
    url = "https://www.mikrodinet.eu.org/?user=Mikrodinet";
    alt = "MIKRODINET";
    title = "MIKRODINET OPPEN SOURCE GITHUB";
    banner = "asset/img/ico.png";
    width = "300";
    height = "250";
}
if (pasang_iklan == 2) {
    url = "https://www.mikrodinet.eu.org/?user=Github ";
    alt = "GITHUB";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE CODE GITHUB";
    banner = "asset/img/finder-mikrodinet.png";
    width = "300";
    height = "250";
}
if (pasang_iklan == 3) {
    url = "https://www.mikrodinet.eu.org/?user=MICROSOFT  ";
    alt = "MICROSOFT ";
    title = "MIKRODINET OPPEN SOURCE MICROSOFT";
    banner = "asset/img/finder-mikrodinet.png ";
    width = "300";
    height = "250";
}
if (pasang_iklan == 4) {
    url = "https://www.mikrodinet.eu.org/?user=GOOGLE";
    alt = "GOOGLE";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE CODE GOOGLE  ";
    banner = "asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (pasang_iklan == 5) {
    url = "https://www.mikrodinet.eu.org/?user=GOLANG ";
    alt = "GOLANG";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE GOLANG (The Go Programming Language)";
    banner = "asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (pasang_iklan == 6) {
    url = "https://www.mikrodinet.eu.org/?user=CLOUDFLARE";
    alt = "CLOUDFLARE";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE CLOUDFLARE";
    banner = "asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (pasang_iklan == 7) {
    url = "https://www.mikrodinet.eu.org/?user=Whatsapp ";
    alt = "WHATSHAPP";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE WHATSAPP";
    banner = "asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (pasang_iklan == 8) {
    url = "https://www.mikrodinet.eu.org/?user=awdev-corporation";
    alt = "Awdev Corporation";
    title = "MIKRODINET FINDER FREE OPPEN SOUCE AWDEV CORPORATION";
    banner = "asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (pasang_iklan == 9) {
    url = "https://www.mikrodinet.eu.org/?user=Twitter";
    alt = " TWITTER";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE TWITTER ";
    banner = "asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (pasang_iklan == 10) {
    url = "https://www.mikrodinet.eu.org/?user=FACEBOOK  ";
    alt = " FACEBOOK";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE CODE FACEBOOK  ";
    banner = "asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (pasang_iklan == 1) {
    url = "https://www.mikrodinet.eu.org/?user=WAHYU9KDL  ";
    alt = "WAHYU9KDL";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE WAHYU9KDL  ";
    banner = "asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}

document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=\"' + alt + '\"></a>');

/*
 ***** ACTIVE SUBDOMAINS (NS records)
 * ***********************
 *
 * This list contains NS records in extension to the list of active CNAMEs in this repository.
 *
 * Second level NS records makes it possible for subdomain owners to redirect to another DNS provider.
 * This option has potential security issues (e.g. if you use another DNS provider to add MX records to route your email traffic)
 * and is only meant for advanced users.
 *
 * You should avoid this option if you only want a Mikrodinet.eu.org subdomain!!!
 * FYI: https://github.com/mikrodinet
 */

var ns_active = {
  "mikrodinet": ["kurt.ns.cloudflare.com", "tani.ns.cloudflare.com", "rose.ns.cloudflare.com", "ns.awdev.my.id"],
  "awdev": ["shane.ns.cloudflare.com", "tani.ns.cloudflare.com", "rose.ns.cloudflare.com", "ns.awdev.eu.org"],
  "corporation": ["ns1.awdev.eu.org", "ns2.awdev.eu.org", "ns1.awdev.my.id", "ns2.awdev.my.id"],
  
  }

/*
 * The allocation of new ns records is discontinued (at the moment)
 */

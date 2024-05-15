import { Client } from "pg";

const client = new Client({
  user: "avnadmin",
  host: "pg-33824d09-learnsql.l.aivencloud.com",
  database: "learnsql",
  password: "AVNS_Z-tCkw2hUlsw24Ff5Zs",
  port: 18891,
  ssl: {
    rejectUnauthorized: true,
    ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUQ2nN1C0AH8o5+Sg/n3gbjvDcr1cwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvNWJkMzdmMTYtNDBjYy00YTQ3LTg5NTktY2RkNWM0YWY4
NzI2IFByb2plY3QgQ0EwHhcNMjQwNTE0MTM1OTQzWhcNMzQwNTEyMTM1OTQzWjA6
MTgwNgYDVQQDDC81YmQzN2YxNi00MGNjLTRhNDctODk1OS1jZGQ1YzRhZjg3MjYg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAJuaaaiF
GLsKdYgPXH+Qk8FasHU8e5YaemaLVhkCDlNEzAZjhlvTNbOcZKFEod3nhamR59Os
o7yTFsXIV20MYt/ZdOygy2BqBi0g0JGuQ1M1XTXnEYJx46eCtWswT6EJbv/JtJt+
ksCAeuuXlX9Z2Sp1ihsqzcnuaULz4cz8WphZeS8SC7HNI8TXK3cs6YDTN1UKzMAO
SGHYBspOApDosVV4mLoGwpLomdxfDzHBsFEc2gzfVOMhQuueZUjnvPN882qL6V1E
B+IycqUNS1rHMIyw2T4L1QQbh8slvtOYvivDvhxx1ieiJW1tEtxFMH4WihMRoy6a
S9ovBpdnWQVybNIzQJIgFXyBeg9WFPxVAFkkKUgggImMzf+6NKRMhm1tkWYZjyi7
yWCn2g30VyiVORH5nAxAjMqakENJuptTrclh+xiUVNAw0bp9/fzQO+bSvi0Vb9at
n3/RUro89nHBiQr9UMLGGiTknA2uEd2vGmOQMPJogbgNxULReMWwm1bYuQIDAQAB
oz8wPTAdBgNVHQ4EFgQUFP2HC5xbEu5AXWWL65d9xeNUgGYwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBACDVlRwgnZQEIDVk
fdq3dPrRzg++y7obrZd60WqE9mxcXNaQH1DmOXsUUpYd9df9r0usBHAM3eB5aQiv
qQwGk1f7pmhh/5WW2MPYZq4yJnAd7MaOwQwKmCG4dIwFMuG5sk57xejK6sUtlsIq
PgHfCTburA46kd7znL7Xm7G+4PJyv3BAlwpOLDFQVEYyeUbPOkrj52opum851rnK
cg77MqTzmQMmFyNCJbuBijBWuTgd35gs2opwopCnM9mnxcZJXukwOko2LY3rOIt5
rHUPVvRkUy5Q84FIaSX14a6WEndz4bxtZ++OlgZzChYRZIXuMOpoABOxDOhceaV+
v4x4OS6dL7qP9vKN8CMMJVEzqPvVza4/YONTyd/Sr6i37b1FUNrBOWXRYyEOEE35
SBSRHp6Wy+icl2ChtnoEEKQI12GnwVXeVqtLNcLbBNdYHQcGD4sjSDNMG1Dz8ZU0
VezMydUBFUUZPk9lcyY6xh10tP6AdubJgU/bIJw03VHbZ9Tk9Q==
-----END CERTIFICATE-----`,
  },
});

client
  .connect()
  .then(() => console.log("database connected!"))
  .catch((e) => console.log(e));

export { client };

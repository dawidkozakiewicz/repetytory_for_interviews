const uri = 'https://żółw.pl';
const encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://%C5%BC%C3%B3%C5%82w.pl"


try {
    console.log(decodeURI(encoded));
    // expected output: "https://żółw.pl"
} catch (e) { // catches a malformed URI
    console.error(e);
}
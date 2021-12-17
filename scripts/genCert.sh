CA_KEY=''
CA_PEM=''
CNF='./dev.psylean.it.cnf'
OUT='./'

while [ -n "$1" ]; do
  case $1 in
    -k)
      CA_KEY=$2
      shift 2 ;;
    -p)
      CA_PEM=$2
      shift 2 ;;
    -c)
      CNF=$2
      shift 2 ;;
    -o)
      OUT=$2
      shift 2 ;;
    -h)
      echo "Usage: genCert.sh -k KEY -p PEM [-c CNF|-o OUT|-h]"
      echo "  -k  Root certificate private key"
      echo "  -p  Root certificate"
      echo "  -c  Openssl config (defaults to ./dev.psylean.it.cnf)"
      echo "  -o  Output directory (defaults to ./)"
      echo "  -h  Print this message"
      exit 0 ;;
    *)
      echo "Unrecognized option $1"
      exit 1 ;;
  esac
done

if [ -d "$OUT" ] && [ -f "$CA_KEY" ] && [ -f "$CA_PEM" ] && [ -f "$CNF" ]; then
  echo "Have you added you local IP address to the configuration file?"
  echo "(If you don't want to use this feature just answer yes) [y/N]"
  read -r answer
  if [ answer != 'y' ] || [ answer != 'Y' ]; then exit -; fi
  openssl req -new \
    -newkey rsa:2048 \
    -keyout "$OUT/dev.psylean.it.key" \
    -nodes \
    -out "$OUT/dev.psylean.it.csr" \
    -config "$CNF" \
      && openssl x509 -req -days 825 -sha256 \
        -in "$OUT/dev.psylean.it.csr" \
        -CA "$CA_PEM" \
        -CAkey "$CA_KEY" \
        -CAcreateserial \
        -out "$OUT/dev.psylean.it.crt" \
        -extfile "$CNF" \
        -extensions v3_req
else
  echo "Check your paths..."
  exit 1
fi

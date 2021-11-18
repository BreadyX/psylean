OUT="$HOME/certs"

while [ -n "$1" ]; do
  case $1 in
    -o)
      OUT="$2"
      shift 2 ;;
    -h)
      echo "Usage: genRoot.sh [-o OUT|-h]"
      echo "  -o  Output directory (defaults to ~/certs)"
      echo "  -h  Print this message"
      exit 0 ;;
    *)
      echo "Unrecognized option $1"
      exit 1 ;;
  esac
done

if [ -d "$OUT" ]; then
  openssl genrsa -des3 -out "$OUT/private.key" 2048 \
    && openssl req -x509 -new -nodes -sha256 -days 1825 \
      -key "$OUT/rootPrivate.key" \
      -out "$OUT/rootCert.pem"
else
  echo "Check your paths..."
  exit 1
fi


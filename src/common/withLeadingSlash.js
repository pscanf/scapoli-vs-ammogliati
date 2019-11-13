export default function withLeadingSlash(path) {
    return path.startsWith("/") ? path : `/${path}`;
}

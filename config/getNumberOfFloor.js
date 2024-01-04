function getNumberOfFloor(position) {
    if (
        position === "Lt 1 Range 1 (Sayap Kanan)" ||
        position === "Lt 1 Range 2 (Sayap Kanan)" ||
        position === "Lt 1 Range 3 (Sayap Kanan)"
    ) {
        return "1 - Sayap Kanan";
    } else if (position === "Lt 1 Range 4 (Tengah)") {
        return "1 - Bagian Tengah";
    } else if (
        position === "Lt 1 Range 5 (Sayap Kiri)" ||
        position === "Lt 1 Range 6 (Sayap Kiri)" ||
        position === "Lt 1 Range 7 (Sayap Kiri)"
    ) {
        return "1 - Sayap Kiri";
    } else if (
        position === "Lt 2 Range 1 (Sayap Kanan)" ||
        position === "Lt 2 Range 2 (Sayap Kanan)" ||
        position === "Lt 2 Range 3 (Sayap Kanan)"
    ) {
        return "2 - Sayap Kanan";
    } else if (position === "Lt 2 Range 4 (Tengah)") {
        return "2 - Bagian Tengah";
    } else if (
        position === "Lt 2 Range 5 (Sayap Kiri)" ||
        position === "Lt 2 Range 6 (Sayap Kiri)" ||
        position === "Lt 2 Range 7 (Sayap Kiri)"
    ) {
        return "2 - Sayap Kiri";
    } else if (position === "Rooftop") {
        return "3 - Rooftop";
    } else if (position === "Lt 3 Tengah") {
        return "3 - Tengah";
    } else if (position === "Lt 3 Kanan") {
        return "3 - Kanan";
    } else if (position === "Lt 3 Kiri") {
        return "3 - Kiri";
    } else if (
        position === "Depan R. Logistik" ||
        position === "Depan R. Dos. RPL" ||
        position === "Depan R. Dos. Teknik Logistik" ||
        position === "Lobby Gedung ITTelkom"
    ) {
        return "2 - Sayap Kiri";
    } else {
        return "info posisi bolo?";
    }
}

export default getNumberOfFloor;

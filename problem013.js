function parametricSort(a, b) {
    if (b == "asc") return a.sort();
    else if (b == "desc") return (a.sort()).reverse();
    else return false;
}

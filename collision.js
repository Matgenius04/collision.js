function cross(fs,fy,gs,gy) {
    if (isNaN(fs) == true || isNaN(fy) == true || isNaN(gs) == true || isNaN(gy) == true) {
        return NaN;
    }
    if (fs == gs && fy == gy) {
        return "all solutions";
    } else if (fs == gs && fy != gy) {
        return "no solutions";
    } else if (fs != gs && fy == gy) {
        return [0,fy];
    } else {
        return [((gy-fy)/(fs-gs)),(fs*((gy-fy)/(fs-gs)))+fy];
    }
}
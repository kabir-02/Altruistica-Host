
export const getFunds = async (search) => {
    const decoded = decodeURIComponent(search);
    const url = `/api/funds${decoded}`;
    const res = await fetch(url);
    return await res.json();

}
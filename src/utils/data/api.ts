export const getData = async () => {
  const res = await fetch("http://localhost:3000/api/works", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  return res.json();
};

export async function getDataId(_id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/works/${_id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be handled at a higher level
  }
}

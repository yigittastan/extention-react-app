const API_BASE = "http://localhost:8000/api-docs/";

export async function userPost() {
  const res = await fetch(`${API_BASE}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(favorite),
  });
  if (!res.ok) throw new Error("Giriş Başarısız");
  return res.json();
}

export async function getFavorites() {
  const res = await fetch(`${API_BASE}/favorites`);
  if (!res.ok) throw new Error("Favoriler alınamadı");
  return res.json();
}

export async function addFavorite(favorite) {
  const res = await fetch(`${API_BASE}/favorites`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(favorite),
  });
  if (!res.ok) throw new Error("Favori eklenemedi");
  return res.json();
}

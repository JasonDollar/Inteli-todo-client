export const saveInLocalStorage = (key: string, obj: any) => {
  localStorage.setItem(key, JSON.stringify(obj))
}
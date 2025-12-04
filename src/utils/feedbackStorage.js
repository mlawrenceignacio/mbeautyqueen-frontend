export const FEEDBACK_KEY = "mbeauty_feedbacks";

export function getAllFeedbacks() {
  const raw = localStorage.getItem(FEEDBACK_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveAllFeedbacks(list) {
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(list));
}

export function addFeedback(fb) {
  const list = getAllFeedbacks();
  list.unshift(fb);
  saveAllFeedbacks(list);
}

export function updateFeedback(id, updated) {
  let list = getAllFeedbacks();
  list = list.map((fb) => (fb.id === id ? { ...fb, ...updated } : fb));
  saveAllFeedbacks(list);
}

export function deleteFeedback(id) {
  let list = getAllFeedbacks();
  list = list.filter((fb) => fb.id !== id);
  saveAllFeedbacks(list);
}

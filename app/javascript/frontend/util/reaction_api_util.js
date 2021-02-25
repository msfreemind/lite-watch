export const postReaction = reaction => (
  $.ajax({
    method: 'POST',
    url: '/api/reactions',
    data: { reaction }
  })
);
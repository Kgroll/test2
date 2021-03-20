async function storyFormHandler(event) {
    event.preventDefault();
  
    const story_text = document.querySelector('textarea[name="story-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (story_text) {
      const response = await fetch('/api/storys', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          story_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.story-form').addEventListener('submit', storyFormHandler);
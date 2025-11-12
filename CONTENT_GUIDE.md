# Content Guide - How to Add Your LinkedIn Article and Documentation

This guide will help you fill in the placeholders for your LinkedIn article and documentation links.

## 📝 LinkedIn Article Setup

Open `index.html` and find **line 413-441** (the LinkedIn article card). Replace the following placeholders:

### Placeholders to Replace:

```html
<!-- LINE 422 -->
[ADD_DATE]
Example: "January 15, 2025" or "Jan 2025"

<!-- LINE 425 -->
[ADD_TIME]
Example: "5" (for 5 min read) or "10" (for 10 min read)

<!-- LINE 428 -->
[ADD_YOUR_ARTICLE_TITLE]
Example: "Building AI Agents with LangChain: A Complete Guide"

<!-- LINE 429-431 -->
[ADD_YOUR_ARTICLE_DESCRIPTION_HERE]
Example: "A comprehensive walkthrough of building intelligent AI agents using LangChain and OpenAI. Learn about tool usage, memory management, and production deployment."

<!-- LINE 433-435 -->
[TAG1], [TAG2], [TAG3]
Example: "AI Agents", "LangChain", "Tutorial"

<!-- LINE 437 -->
[ADD_LINKEDIN_ARTICLE_URL]
Example: "https://www.linkedin.com/pulse/your-article-slug/"
```

### Complete Example:

```html
<article class="blog-card featured-article">
    <div class="blog-image linkedin-article">
        <span class="blog-category">
            <i class="fab fa-linkedin"></i> LinkedIn Article
        </span>
    </div>
    <div class="blog-content">
        <div class="blog-meta">
            <span class="blog-date">
                <i class="far fa-calendar"></i> January 15, 2025
            </span>
            <span class="blog-read-time">
                <i class="far fa-clock"></i> 8 min read
            </span>
        </div>
        <h3 class="blog-title">Building AI Agents with LangChain</h3>
        <p class="blog-excerpt">
            A comprehensive walkthrough of building intelligent AI agents using LangChain and OpenAI.
        </p>
        <div class="blog-tags">
            <span class="tag">AI Agents</span>
            <span class="tag">LangChain</span>
            <span class="tag">Tutorial</span>
        </div>
        <a href="https://www.linkedin.com/pulse/building-ai-agents-langchain-kranthi-kandi" target="_blank" class="blog-read-more">
            Read on LinkedIn <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</article>
```

---

## 📚 Documentation Links Setup

Open `index.html` and find **line 401-473** (Documentation section). Update the `href="#"` attributes with your actual links:

### Documentation Cards to Update:

#### 1. AI Chatbot Guide (Line 423)
```html
<!-- Replace this: -->
<a href="#" class="doc-link">

<!-- With your actual link, for example: -->
<a href="https://github.com/kranthikandi/ai-chatbot/blob/main/README.md" class="doc-link">
<!-- OR -->
<a href="/docs/chatbot-guide.pdf" class="doc-link">
```

#### 2. 3D Facial Recognition Paper (Line 439)
```html
<!-- Replace this: -->
<a href="#" class="doc-link">

<!-- With your paper link: -->
<a href="/papers/facial-recognition-thesis.pdf" class="doc-link">
<!-- OR -->
<a href="https://drive.google.com/file/d/YOUR_FILE_ID/view" class="doc-link">
```

#### 3. Version Control Paper (Line 455)
```html
<!-- Replace this: -->
<a href="#" class="doc-link">

<!-- With your paper link: -->
<a href="/papers/online-subversion-paper.pdf" class="doc-link">
```

---

## 📁 Where to Place Your Documentation Files

If you want to host PDFs or documentation files on your GitHub Pages site:

### Option 1: Add to Repository
1. Create a `docs/` folder in your repository
2. Add your PDFs/files there
3. Reference them like: `href="/docs/your-file.pdf"`

### Option 2: Use External Links
- Google Drive (make sure it's publicly accessible)
- Dropbox public links
- GitHub releases
- Any other hosting service

---

## 🚀 Quick Update Process

1. **Get your LinkedIn article URL:**
   - Go to your LinkedIn article
   - Copy the URL from the browser
   - It should look like: `https://www.linkedin.com/pulse/article-title-your-name/`

2. **Update index.html:**
   - Open `index.html`
   - Find the placeholders (search for `[ADD_`)
   - Replace with your actual content

3. **Commit and push:**
   ```bash
   git add index.html
   git commit -m "Add LinkedIn article details"
   git push
   ```

4. **Deploy:**
   - Merge your PR
   - GitHub Pages will update automatically

---

## 💡 Tips

- **Keep descriptions concise**: 1-2 sentences max
- **Use relevant tags**: 3-4 tags that describe your content
- **Check links**: Make sure all URLs work before committing
- **Reading time**: Estimate based on article length (avg 200 words/minute)

---

## ❓ Need Help?

If you run into issues or want to add more articles/documentation:
1. The structure is already there - just copy/paste a blog card or doc card
2. Update the content and links
3. Commit and push!

The design will automatically adjust to any number of articles or documentation cards.

# Your Brand — GitHub Pages Landing Page

A responsive red-and-white starter website with:
- Landing page (`index.html`)
- Contact page (`contact.html`)
- Floating demo live-chat widget
- Mobile navigation
- Responsive layout and basic metadata

## 1. Personalize before publishing

Open these files in a text editor or GitHub's web editor:

1. Replace `YOUR BRAND` / `Your Brand` and the letter `Y` logo mark in `index.html` and `contact.html`.
2. In `script.js`, change `CONTACT_EMAIL = "hello@example.com"` to your real email address.
3. In `contact.html`, update the visible sample email, phone number and business hours.
4. Replace sample copy/features with your real products or services.
5. Add your own logo file if you have one, or keep the simple text mark for now.

## 2. Publish on GitHub Pages

1. Sign in at https://github.com/ and create a new **public** repository, for example `my-landing-page`.
2. Upload `index.html`, `contact.html`, `styles.css`, `script.js`, and `README.md` to the repository's root (not inside another folder).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. Wait a minute or two. GitHub will show the published URL, usually `https://YOUR-USERNAME.github.io/my-landing-page/`.

For a user-site repository named `YOUR-USERNAME.github.io`, the site URL is usually `https://YOUR-USERNAME.github.io/`.

## 3. Use your own domain or an existing URL path

- If you own a domain, open **Settings → Pages → Custom domain**, enter the domain and follow GitHub's DNS instructions. DNS changes may take time to propagate.
- GitHub Pages does not let you publish at an arbitrary path on a third-party website you do not control. To serve this page at `https://yourdomain.com/some-path/`, you need control of that domain and must configure the hosting, routing, or reverse proxy appropriately. A project Pages site normally uses `https://YOUR-USERNAME.github.io/REPOSITORY/`.
- If you want this to appear under an existing website's URL, first identify the exact domain and path and where that website is hosted.

## 4. Contact form limitation

GitHub Pages is static hosting. This starter form opens the visitor's email app using `mailto:`; it does **not** send/store submissions on the server by itself. For direct web submissions, create a form with a service such as Formspree or use your own backend, then connect its endpoint in the form code.

## 5. Real live chat

The included widget is a front-end demo, not a real agent-connected chat service. To enable real-time agent support, create an account with a provider such as Tawk.to, Crisp, or another live-chat service and add its official embed snippet to both HTML pages before `</body>`. Remove or disable the demo widget if you use a provider's own chat bubble so that two bubbles do not overlap.

## Files

- `index.html` — home/landing page
- `contact.html` — contact page
- `styles.css` — visual styling and responsive layout
- `script.js` — menu, contact mailto handoff, demo chat

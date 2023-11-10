# CMS - Backoffice

This frontend is for manage all the content that you want to publish in your blog.

## Setup

### Quick start

Before all, you need to have ready your api.

Install dependencies

```
npm run install
```

### TinyMce

TinyMce is a third party tool to edit HTML. You need to [register](https://www.tiny.cloud/auth/signup/) in his website and get an api key.

[Here](https://www.tiny.cloud/my-account/integrate/) you can find your api key.

### Environment variables

Now you need to create a .env file and set up this variables.

- _VITE_API_URL_ : API url.
- _VITE_TINYMCE_API_KEY_ : The TinyMce API key.

### Run server

If you are in development mode:

```
npm run dev
```

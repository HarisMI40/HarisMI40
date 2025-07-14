---
title: "Showing Off Blog Features"
published: 2025-07-20
draft: false
author: "Mary Shelley"
tags: ['astro']
---

!["A Black person with short, thick hair and prescription glasses sits at an organized workstation, using a magnification app to navigate a webpage. Their posture is proper and relaxed. On the desk: a computer, a mouse, a large desk lamp and a small notebook."](https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Magnification_app_-_Sherm_for_Disabled_And_Here.png/640px-Magnification_app_-_Sherm_for_Disabled_And_Here.png)

Since the post does not have a description in the frontmatter, the first paragraph is used.

## Code Blocks

Let's look at some code block styles:

```python
def hello_world():
    print("Hello, world!")

hello_world()
```

```python title="hello.py"
def hello_world():
    print("Hello, world!")

hello_world()
```

```shell
python hello.py
```

Also some inline code: `1 + 2 = 3`. Or maybe even `(= (+ 1 2) 3)`. 

See the [Expressive Code Docs](https://expressive-code.com/key-features/syntax-highlighting/) for more information on available features like wrapping text, line highlighting, diffs, etc.

## Basic Markdown Elements
- List item 1
- List item 2

**Bold text**

*Italic text*

~~Strikethrough text~~

[Link](https://www.example.com)

> In life, as in art, some endings are bittersweet. Especially when it comes to love. Sometimes fate throws two lovers together only to rip them apart. Sometimes the hero finally makes the right choice but the timing is all wrong. And, as they say, timing is everything.
>
>\- Gossip Girl

| Name      | Age | City         |
|-----------|-----|--------------|
| Alice     | 30  | New York     |
| Bob       | 25  | Los Angeles  |
| Charlie   | 35  | Chicago      |

___

## Images

Images can include a title string after the URL to render as a `<figure>` with a `<figcaption>`.

![Pixel art of a tree](https://upload.wikimedia.org/wikipedia/commons/9/90/PixelatedGreenTreeSide.png "Pixel art renders poorly without proper CSS")

```md title="Pixel art markdown" wrap
![Pixel art of a tree](https://upload.wikimedia.org/wikipedia/commons/9/90/PixelatedGreenTreeSide.png "Pixel art renders poorly without proper CSS")
```

![Pixel art of a tree](https://upload.wikimedia.org/wikipedia/commons/9/90/PixelatedGreenTreeSide.png#pixelated "But adding #pixelated fixes this")

```md title="Pixel art markdown with #pixelated" wrap
![Pixel art of a tree](https://upload.wikimedia.org/wikipedia/commons/9/90/PixelatedGreenTreeSide.png#pixelated "But adding #pixelated fixes this")
```

## HTML Elements

<button>A Button</button>

### Fieldset with Inputs

<fieldset>
    <input type="text" placeholder="Type something"><br>
    <input type="number" placeholder="Insert number"><br>
    <input type="text" value="Input value"><br>
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select><br>
    <textarea placeholder="Insert a comment..."></textarea><br>
    <label><input type="checkbox"> I understand<br></label>
    <button type="submi">Submit</button>
</fieldset>

### Form with Labels

<form>
<label>
    <input type="radio" name="fruit" value="apple">
    Apple
</label><br>

<label>
    <input type="radio" name="fruit" value="banana">
    Banana
</label><br>

<label>
    <input type="radio" name="fruit" value="orange">
    Orange
</label><br>

<label>
    <input type="radio" name="fruit" value="grape">
    Grape
</label><br>

<label>
    <input type="checkbox" name="terms" value="agree">
    I agree to the terms and conditions
</label><br>

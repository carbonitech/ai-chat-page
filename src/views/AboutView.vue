<template>
  <div class="container">
    <div class="about">
      <div class="section">
        <h1 class="title">Product in Beta</h1>
        <p class="description">This AI Chatbot may produce inaccurate or incomplete answers to questions. While it will try to not answer when it's not sure of an answer, it may still provide an answer, even if it's inaccurate.</p>
      </div>
      <div class="section">
        <h1 class="title">How it works</h1>
        <p class="description">Powered by OpenAI's GPT3.5 Language Model. This chatbot references documents specific to HVAC.</p>
        <p class="description">Documents include those from manufacturers and industry experts, such as:</p>
        <ul class="document-list">
          <li>Specification Guides</li>
          <li>Datasheets</li>
          <li>Installation Manuals</li>
          <li>Warranty Policies</li>
          <li>Catalogs</li>
          <li>Industry Reports</li>
        </ul>
      </div>
      <div class="section">
        <h1 class="title">Try It Out</h1>
        <h3 class="subtitle">Simply ask a question, and the AI will look up the most relevant text from these documents and summarize an answer for you!</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 100vh;
}

.about {
  text-align: center;
  width: calc(100vw / 3);
  max-width: 600px;
  margin-top: 50px;
}

.section {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  font-size: 14px;
  margin-bottom: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.document-list {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  list-style: none;
  margin-left: 50px;
  margin-bottom: 10px;
  font-weight: bolder;
  text-align: left;
}

.document-list li::before{
  content: "-   "
}

.subtitle {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}
</style>

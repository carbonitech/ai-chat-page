<script setup>
import { ref } from 'vue'

const user_query = ref('')
const chat_response = ref('')

async function submitQuery() {
    try {
        const response = await fetch ('http://localhost:8000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"query": user_query.value})
        })
        if (response.ok) {
            const response_data = await response.json()
            chat_response.value = response_data.response
        } else {
            console.log(response)
            throw new Error('No response')
        }
    }
    catch (error) {
        console.error(error)
    }
}
</script>

<template>
    <div class="container">
        <div class="query">
            <input type="text" v-model="user_query" placeholder="Ask a question ..." />
            <button @click="submitQuery">Ask</button>
        </div>
        <div class="response">
            <h2>Response</h2>
            <div v-if="chat_response">
                <p> {{ chat_response }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
}

.query {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}

.response {
  margin-top: 20px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
  background-color: #ffffff;
}
</style>
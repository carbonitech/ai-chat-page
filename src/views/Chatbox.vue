<script setup>
import { ref } from 'vue'
import Spinner from '@/components/Spinner.vue'
import IconDocumentation from '@/components/icons/IconDocumentation.vue'

const user_query = ref('')
const chat_response = ref('')
const waiting = ref(false)

async function submitQuery() {
    chat_response.value = ''
    waiting.value = true
    try {
        const response = await fetch ('https://api.carbonitech.com/ai/chat', {
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
            chat_response.value = 'Sorry, there was an error processing your request.'
            throw new Error('No response')
        }
    }
    catch (error) {
        console.error(error)
    }
    waiting.value = false
}
</script>

<template>
    <div class="container">
        <div class="query">
            <input type="text" v-model="user_query" placeholder="Ask a question ..." />
            <button @click="submitQuery">Ask</button>
        </div>
        <div class="response">
            <div class="icon"><IconDocumentation /></div>
            <div v-if="chat_response">
                <p> {{ chat_response }}</p>
            </div>
            <div v-else-if="waiting">
                <Spinner />
            </div>
            <div v-else>The AI's response will appear here ...</div>
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
    justify-self: flex-start;
    overflow: visible;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    overflow: visible;
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

.icon {
    margin-right: 10px;
}
.response {
    display: flex;
    margin-top: 20px;
    margin-bottom: 5px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-bottom: 1px solid #ccc;
    padding: 5px;
    border-radius: 4px;
    background-color: #ffffff;
}
</style>
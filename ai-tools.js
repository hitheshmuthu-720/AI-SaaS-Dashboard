// AI Tools

const toolButtons = document.querySelectorAll(".ai-tool-buttons button");

const toolTitle = document.getElementById("toolTitle");
const toolDescription = document.getElementById("toolDescription");
const toolInput = document.getElementById("toolInput");

const generateBtn = document.getElementById("generateBtn");
const loading = document.getElementById("loading");

const toolOutputContainer =
    document.getElementById("toolOutputContainer");

const toolOutput = document.getElementById("toolOutput");

const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");


// Tool Information

const tools = {

    chat: {
        title: "AI Chat Assistant",
        description: "Ask a question and get an AI-powered response.",
        placeholder: "Example: Explain Java inheritance in simple words."
    },

    image: {
        title: "AI Image Generator",
        description: "Create an image prompt from your idea.",
        placeholder: "Example: A futuristic city at night."
    },

    code: {
        title: "AI Code Generator",
        description: "Generate code based on your requirements.",
        placeholder: "Example: Create a Java program to find the largest number."
    },

    summarizer: {
        title: "AI Text Summarizer",
        description: "Summarize long text into simple content.",
        placeholder: "Paste your text here..."
    },

    email: {
        title: "AI Email Generator",
        description: "Create a professional email.",
        placeholder: "Example: Write an internship application email."
    },

    blog: {
        title: "AI Blog Generator",
        description: "Generate a blog introduction from your topic.",
        placeholder: "Example: Benefits of Artificial Intelligence."
    }

};


// Select Tool

toolButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedTool = button.dataset.tool;

        toolTitle.textContent = tools[selectedTool].title;

        toolDescription.textContent =
            tools[selectedTool].description;

        toolInput.placeholder =
            tools[selectedTool].placeholder;

        toolInput.value = "";

        toolOutputContainer.style.display = "none";

    });

});
// Generate

let currentTool = "chat";

toolButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        currentTool = button.dataset.tool;

        toolTitle.textContent =
            tools[currentTool].title;

        toolDescription.textContent =
            tools[currentTool].description;

        toolInput.placeholder =
            tools[currentTool].placeholder;

        toolInput.value = "";

        toolOutput.textContent = "";

        toolOutputContainer.style.display = "none";

    });

});


generateBtn.addEventListener("click", function() {

    const input = toolInput.value.trim();

    if (input === "") {

        alert("Please enter something first!");

        return;

    }

    loading.style.display = "block";

    toolOutputContainer.style.display = "none";


    setTimeout(function() {

        let result = "";


        if (currentTool === "chat") {

            result =
                "AI Chat Response:\n\n" +
                "Here is a helpful answer to your question:\n\n" +
                input;

        }


        else if (currentTool === "image") {

            result =
                "Image Prompt:\n\n" +
                "Create a high-quality image of:\n\n" +
                input;

        }


        else if (currentTool === "code") {

            result =
                "Generated Code:\n\n" +
                "public class Main {\n" +
                "    public static void main(String[] args) {\n" +
                "        System.out.println(\"" +
                input +
                "\");\n" +
                "    }\n" +
                "}";

        }


        else if (currentTool === "summarizer") {

            result =
                "Summary:\n\n" +
                input;

        }


        else if (currentTool === "email") {

            result =
                "Professional Email:\n\n" +
                "Subject: " +
                input +
                "\n\n" +
                "Dear Sir/Madam,\n\n" +
                "I am writing regarding " +
                input +
                ".\n\n" +
                "Thank you for your time.\n\n" +
                "Best regards";

        }


        else if (currentTool === "blog") {

            result =
                "Blog Content:\n\n" +
                "Title: " +
                input +
                "\n\n" +
                "Introduction:\n\n" +
                input +
                " is an important topic. " +
                "In this blog, we will explore its key benefits and applications.";

        }


        loading.style.display = "none";

        toolOutput.textContent = result;

        toolOutputContainer.style.display = "block";


        // Save to History

        let savedHistory =
            JSON.parse(
                localStorage.getItem("aihubHistory")
            ) || [];

        savedHistory.push({

            tool: tools[currentTool].title,

            input: input,

            result: result,

            date: new Date().toLocaleString()

        });

        localStorage.setItem(
            "aihubHistory",
            JSON.stringify(savedHistory)
        );


    }, 1500);

});

// Copy

copyBtn.addEventListener("click", function() {

    navigator.clipboard.writeText(
        toolOutput.textContent
    );

    alert("Result copied!");

});


// Clear

clearBtn.addEventListener("click", function() {

    toolInput.value = "";

    toolOutput.textContent = "";

    toolOutputContainer.style.display = "none";

});
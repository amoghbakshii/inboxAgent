
document.getElementById('loadBtn').addEventListener('click', async () => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<p>Loading summaries...</p>'; 
  
    try {
        
        const res = await fetch('/summarize-email');
        const data = await res.json();

        outputDiv.innerHTML = ''; 

        if (data.summaries.length === 0) {
            outputDiv.innerHTML = '<p>No summaries available.</p>';
            return;
        }

       
        data.summaries.forEach((item, index) => {
            const emailHtml = `
                <div class="email-card">
                    <h3>Email #${index + 1}</h3>
                    <p><strong>From:</strong> ${item.sender}</p>
                    <p><strong>Date:</strong> ${item.date}</p>
                    <p><strong>Summary:</strong> ${item.summary}</p>
                </div>
            `;
            outputDiv.innerHTML += emailHtml;
        });
    } catch (err) {
        outputDiv.innerHTML = '<p>Error loading emails. Please try again later.</p>';
        console.error('Error during fetching email summaries:', err);
    }
});


function displayEmails(emails) {
    const emailListContainer = document.getElementById('emailList');
    emailListContainer.innerHTML = ''; 

    emails.forEach(email => {
        const emailDiv = document.createElement('div');
        emailDiv.classList.add('email');

        const emailHeader = document.createElement('div');
        emailHeader.classList.add('email-header');

        const emailSender = document.createElement('span');
        emailSender.classList.add('email-sender');
        emailSender.innerText = `From: ${email.sender}`;

        const emailTimestamp = document.createElement('span');
        emailTimestamp.classList.add('email-timestamp');
        emailTimestamp.innerText = `Date: ${new Date(email.timestamp).toLocaleString()}`;

        emailHeader.appendChild(emailSender);
        emailHeader.appendChild(emailTimestamp);

        const emailContent = document.createElement('div');
        emailContent.classList.add('email-content');
        emailContent.innerText = `Content: ${email.content}`;

        emailDiv.appendChild(emailHeader);
        emailDiv.appendChild(emailContent);

        emailListContainer.appendChild(emailDiv);
    });
}

// Initial call to display emails without summaries
displayEmails(emails);
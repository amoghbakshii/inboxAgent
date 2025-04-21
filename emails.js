
const emails = [
  {
    sender: "arvind.kumar@gmail.com",
    timestamp: "2025-04-20T10:15:00Z",
    content: "Hello, I hope you're doing well. I wanted to follow up on the project we discussed last week. As per our conversation, I believe we are on track with the milestones, but there are a few key areas we need to revisit. First, regarding the user interface, there are some design adjustments I think would improve the user experience significantly. The second issue pertains to the integration of the payment gateway. While the basic integration is working, there are still some minor bugs that we need to iron out to ensure smooth functionality. Additionally, it would be great if we could have a discussion about the project timeline and address any delays or challenges the team might be facing. Please let me know when you would be available for a quick chat. Looking forward to your response!"
  },
  {
    sender: "isha.patel@gmail.com",
    timestamp: "2025-04-19T08:45:00Z",
    content: "Hi, Just wanted to remind you about our meeting scheduled for tomorrow. We need to finalize the roadmap for the upcoming product launch, and I’d appreciate it if you could gather any data or insights you have so far. There are some key points I’d like us to address, especially around the marketing strategy and customer outreach. It would be helpful to know if we are on track with the production schedules, as any delay at this point could have a major impact on the overall timeline. Please make sure to prepare your notes and bring them to the meeting. Let me know if you need anything before then. Looking forward to it!"
  },
  {
    sender: "devansh.agarwal@gmail.com",
    timestamp: "2025-04-18T17:30:00Z",
    content: "Hey, I hope you’re doing well. I’m writing to confirm the delivery date for the order we placed last week. As discussed, we are expecting the shipment to arrive by the 25th of this month, but we haven’t received any update from the supplier. Could you please check the status and let us know if there are any delays? It’s crucial for us to get this on time because we have a client meeting scheduled for next week, and the delivery is essential for the presentation. If there are any changes to the expected delivery date, kindly inform me immediately. Looking forward to your response!"
  },
  {
    sender: "priya.sharma@gmail.com",
    timestamp: "2025-04-17T14:00:00Z",
    content: "Hi, I wanted to check in on the latest update regarding the software development project. Last time we spoke, we discussed a few bugs that had been identified during testing, and I just wanted to ensure that those issues have been resolved. Also, if you have the latest build ready, it would be great if you could share the download link. We have some internal testers lined up to do a quick round of user acceptance testing, and the sooner we get the build, the better. Please let me know when we can expect this, and also confirm if there are any additional changes or fixes that I should be aware of. Thanks!"
  },
  {
    sender: "rahul.mishra@gmail.com",
    timestamp: "2025-04-16T13:45:00Z",
    content: "Dear team, I’m following up on the proposal document we discussed last week. I’ve made some revisions based on the feedback you provided, and I’d appreciate it if you could take another look. I think we are close to finalizing the content, but there are a few minor tweaks needed in the executive summary and financial projections section. Additionally, I’d like us to focus on the section that outlines our go-to-market strategy, as I feel it could be stronger. Please let me know if you need any more details from my end. Looking forward to wrapping this up soon!"
  },
  {
    sender: "neha.kapoor@gmail.com",
    timestamp: "2025-04-15T12:30:00Z",
    content: "Hi, I hope all is well with you. I’m writing to inquire about the status of the customer feedback report for Q1. As you know, this is crucial for our upcoming product development meeting, and I would like to review the report in advance to prepare. If you have the report ready, could you please send it over? If it’s still in progress, please let me know when I can expect it. Additionally, I would appreciate any insights or recommendations you may have based on the data. Your feedback is always valuable. Looking forward to hearing from you!"
  },
  {
    sender: "ravi.singh@gmail.com",
    timestamp: "2025-04-14T11:00:00Z",
    content: "Hello, Just a quick check-in regarding the team’s progress on the marketing campaign. I know that the content strategy was finalized last week, but I wanted to confirm that everything is on track for the content delivery next week. Also, are the ad creatives ready for approval? Please ensure that they align with the final marketing objectives we discussed earlier. Let me know if there’s anything I can do to help push things forward. Thanks!"
  },
  {
    sender: "ananya.jha@gmail.com",
    timestamp: "2025-04-13T09:15:00Z",
    content: "Dear team, I wanted to check in about the progress on the quarterly sales forecast. We have a meeting scheduled next week, and it would be great if we could have the finalized forecast by then. Can you also include the breakdown of projected sales by region and product category? I believe this information will be crucial for our discussions on resource allocation and strategic planning. Please send the updated report as soon as possible so we can prepare for the meeting. Thanks!"
  },
  {
    sender: "manish.bansal@gmail.com",
    timestamp: "2025-04-12T08:30:00Z",
    content: "Hi, I wanted to follow up on the technical specifications document for the new product. We are aiming to finalize the design in the next two weeks, so it’s important that we get the document locked down soon. If you need any additional information from my side to complete it, feel free to let me know. Also, if there are any technical constraints we should be aware of, please flag them immediately so we can adjust the plan accordingly. Look forward to hearing from you soon!"
  },
  {
    sender: "sneha.gupta@gmail.com",
    timestamp: "2025-04-11T07:45:00Z",
    content: "Dear team, I wanted to reach out and request an update on the status of the partnership negotiations with the supplier. I understand that there were some issues regarding the pricing, and I’d appreciate it if you could provide more details on where we currently stand. If any further discussions are needed, I’d like to schedule a meeting to ensure that we are all aligned on expectations. Please let me know your availability for a quick call, and I’ll set it up. Thanks!"
  },
  {
    sender: "vikas.yadav@gmail.com",
    timestamp: "2025-04-10T06:30:00Z",
    content: "Hey, I hope you're doing well. Just wanted to check in on the status of the contract with the new client. We were expecting to get the finalized version by the end of this week, but I haven’t heard back yet. Could you please confirm if there are any updates? I know the legal team was reviewing the terms, so it would be helpful to know where things stand. I want to make sure we’re ready to move forward once the contract is finalized. Let me know if there’s anything I can do to assist!"
  },
  {
    sender: "sachin.verma@gmail.com",
    timestamp: "2025-04-09T05:15:00Z",
    content: "Hello, I’m writing to ask for an update on the delivery of the hardware components for our project. The last I heard, the expected shipment date was the 12th, but I’m concerned that there may have been some delays. It’s critical that we receive the hardware on time so that we can proceed with the testing phase as planned. If there are any issues with the delivery, please let me know immediately. Additionally, if there are any further updates or changes to the timeline, I would appreciate it if you could inform me as soon as possible. Thanks!"
  },
  {
    sender: "shweta.das@gmail.com",
    timestamp: "2025-04-08T04:00:00Z",
    content: "Hi, I wanted to confirm the schedule for the upcoming project review meeting. As per the last discussion, we were supposed to have a final review next week, but I’m not sure if that’s still on track. Please let me know if there are any changes to the timing or agenda. Also, if you have any new insights or feedback, feel free to share them in advance so that we can incorporate them into the review. Thanks, and I look forward to hearing from you!"
  },
  {
    sender: "madhuri.kumar@gmail.com",
    timestamp: "2025-04-07T03:45:00Z",
    content: "Hello, Just following up on the action items from our last meeting. I’ve updated the project plan based on the tasks assigned, and I wanted to confirm that everything is on schedule. If there are any delays or challenges, please flag them as soon as possible so we can adjust the timeline accordingly. Also, if you need any additional resources or support to complete the tasks, please let me know. Looking forward to hearing back from you!"
  },
  {
    sender: "rahul.bhatia@gmail.com",
    timestamp: "2025-04-06T02:30:00Z",
    content: "Dear team, I wanted to follow up on the status of the design review for the new feature. We’re aiming to have this finalized by the end of the week so that the development team can begin work next Monday. If you have any feedback or changes to suggest, please send them over as soon as possible so we can incorporate them into the final design. Let me know if you need any help in the meantime!"
  },
  {
    sender: "anil.murthy@gmail.com",
    timestamp: "2025-04-05T01:15:00Z",
    content: "Hey, just checking in on the final approval for the marketing collateral we discussed last week. If you have any last-minute suggestions or tweaks, please share them with me, and I’ll make sure to incorporate them. I’d like to get these final materials approved by the end of the week so that we can move forward with the campaign launch next week. Please let me know if there’s anything that’s holding up the approval process. Thanks!"
  },
  {
    sender: "jaya.singh@gmail.com",
    timestamp: "2025-04-04T00:00:00Z",
    content: "Hi, I hope you’re doing well. I’m writing to inquire about the upcoming meeting we scheduled for next Wednesday. I just wanted to confirm that everything is still on track. Additionally, if you have any new agenda items or updates, please feel free to share them beforehand. Looking forward to a productive meeting!"
  }
];


  
  module.exports = emails;
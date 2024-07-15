import { data } from "@/app/types";
import expensioImage from "../../public/expensio_logo.jpg";
import footballImage from "../../public/football_logo.jpg"
import yatriImage from "../../public/namma_yatri_logo.png"

export const projects: Array<data> = [
    {
        name: "Expensio",
        url: "https://github.com/ashuTew01/expensio",
        techStack: "Natural Language Processing, Scikit-Learn, Keras, Flask, Node.js, React, MongoDB",
        description: "A daily expense tracker web app. It utilizes NLP for automated expense entry from simple text or voice inputs about the spending. Innovated expense tracking by adding psychological triggers into categorization to identify user spending behaviors. Crafted a Logistic Regression & Bi-LSTM Model to extract categories of 1000+ expenses and spending behavior of the user. Integrated Promt Engineering by fine-tuning the OpenAI model to generate financial summary for an user.",
        image: expensioImage,
        web: "https://github.com/ashuTew01/expensio"
    },

    {
        name: "Soccer Analyzer",
        url: "https://github.com/Ayan-OP/Soccer-Analytics",
        techStack: "YOLO, Scikit-Learn, OpenCV, Supervision Bytetrack, Python, Object Detection, Object Tracking, Computer Vision",
        description: "Annotated 500+ images of the input video using Roboflow and applied the YOLOv8m model for object detection. Implemented the Supervision’s byte tracker and interpolation techniques to track players, referees and the ball. Assigned teams to players using KMeans clustering based on the visual appearance. Transformed object positions based on the camera view for accurate analysis and calculated player speeds and distances traveled for performance evaluation.",
        image: footballImage,
        web: "https://github.com/Ayan-OP/Soccer-Analytics"
    },

    {
        name: "Namma-Yatri",
        url: "https://github.com/Ayan-OP/Namma-Yatri",
        techStack: "MySQL, Microsoft Excel, Tableau, SQL",
        description: "Analyzed the Namma-Yatri App and aggregated data using ChatGPT into a MySQL database. Extracted key performance indicators and identified data trends through advanced SQL queries and Excel analysis, resulting in a 25% improvement in decision-making accuracy and a 15% increase in operational efficiency. Crafted an interactive Tableau dashboard, transforming raw data into actionable insights, which led to a 25% boostin operational efficiency by identifying and addressing key performance bottlenecks. Streamlined data modeling and cleaning processes, reducing preparation time by 25% and boosting data accuracy by 15%.",
        image: yatriImage,
        web: "https://github.com/Ayan-OP/Namma-Yatri"
    }
]
import "../../Styles/Report.css"

const ReportStatus = ({ status }) => {
    switch (status) {
        case "UNWATCHED":
            return <span class="status-badge status-unwatched">UNWATCHED</span>

        case "VERIFIED":
            return <span class="status-badge status-verified">VERIFIED</span>

        case "REJECTED":
            return <span class="status-badge status-rejected">REJECTED</span>

        default:
            break;
    }
}

const ReportCard = ({ status }) => {
    return (
        <div class="report-card">
            <div class="report-header">
                <span>Order ID: #123456</span>
                <ReportStatus status={status} />
            </div>
            <div class="report-body">
                <div class="report-field">
                    <label>Mobile Number:</label>
                    <p>9876543210</p>
                </div>
                <div class="report-field">
                    <label>Message:</label>
                    <p>Received damaged product. Please assist.</p>
                </div>
                <div class="report-field">
                    <label>Reply:</label>
                    <p>Pending review by support.</p>
                </div>
                <div class="date">Date: 15 May 2025</div>
            </div>
        </div>
    )
}

const Reports = () => {
    return (
        <section className="reports-page">
            <div class="container">
                <ReportCard status={"UNWATCHED"} />
                <ReportCard status={"VERIFIED"} />
                <ReportCard status={"REJECTED"} />
            </div>
        </section>
    )
}

export default Reports;

const AdminDashboard = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        getAnalytics().then(({ data }) => setStats(data));
    }, []);

    return (
        <div className="admin-panel">
            <h2>Business Analytics (Aggregation Results)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Avg Price</th>
                        <th>Total Listings</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map((s) => (
                        <tr key={s._id}>
                            <td>{s._id}</td>
                            <td>${s.avgPrice.toFixed(2)}</td>
                            <td>{s.totalListings}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

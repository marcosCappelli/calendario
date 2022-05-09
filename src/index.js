class workoutDashboard {
    constructor() {
        this.dataPath = './data.json';
        this.activeFilter = 'weekly';
        this.dayMapper = {
            'daily': 'day',
            'weekly': 'week',
            'monthly': 'month'
        }
    }

    loadData(Path, contentType) {
        return new Promise((resolve, reject) => {
            fetch(path, {
                method: 'GET',
                headers: {
                    'Content-Type': contentType,
                },
            })
            .then(response => response.text())
            .then((data) => {
                if (contentType.match('json')) {
                    resolve(JSON.parse(data));
                } else {
                    resolve(data);
                }
            });
        });
    }
    
}
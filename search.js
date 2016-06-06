        $(function() {
            var availableTags = [
                "Cancer",
                "Education",
                "Religion",
                "Natural Disaster",
                "Catastrophe",
                "Animals",
                "Environmental",
                "Health",
                "Cultural",
                "Community",
                "Science",
                "University",
                "Space"
            ];
            $("#tags").autocomplete({
                source: availableTags
            });
        });

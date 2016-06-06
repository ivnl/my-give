        $(function() {
            var availableTags = [
                "Cancer",
                "Education",
                "Religious",
                "Natural Disaster",
                "Catastrophe",
                "Animal",
                "Environmental",
                "Poverty",
                "Health",
                "Arts & Culture",
                "Community",
                "Science",
                "Medicine",
                "University",
                "Veteran"
            ];
            $("#tags").autocomplete({
                source: availableTags
            });
        });
<?php
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['name']) && isset($data['score'])) {
    $name = $data['name'];
    $score = $data['score'];
    $file = 'quiz_results.csv';

    $handle = fopen($file, 'a');

    if (filesize($file) == 0) {
        fputcsv($handle, ['Name', 'Score']);
    }

    fputcsv($handle, [$name, $score]);

    fclose($handle);
    echo "Success";
} else {
    echo "Error: Invalid Data";
}
?>

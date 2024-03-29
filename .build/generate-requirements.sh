#!/bin/sh

projectname=$(basename "$(git rev-parse --show-toplevel)")

echo 'Generating python dependency files:'

echo '-> Installing dependencies...'
poetry run pip install --quiet --upgrade setuptools wheel > /dev/null
poetry install --no-interaction > /dev/null

echo '-> Generating requirements.txt...'
tmpfile=./generated/requirements.txt
file=./generated/requirements.md
poetry export --without-hashes --format requirements.txt --output $tmpfile
echo '# Imported dependencies' > $file
echo '' >> $file
echo '### Generated by _../generate-requirements.sh_' >> $file
echo '' >> $file
echo '```' >> $file
cat $tmpfile >> $file
echo '```' >> $file
mv $tmpfile ../requirements.txt

echo '-> Generating requirements-deptree.md...'
file=./generated/requirements-deptree.md
echo '# Requirements dependency tree' > $file
echo '' >> $file
echo '### Generated by _../generate-requirements.sh_' >> $file
echo '' >> $file
echo '```' >> $file
poetry show --tree --only main >> $file
echo '```' >> $file

echo '-> Generating requirements-imported.md...'
tmpfile=./generated/requirements-pigar.txt
file=./generated/requirements-imported.md
poetry run pigar generate --with-referenced-comments -f $tmpfile ../autosubliminal > /dev/null
echo '# Imported dependencies' > $file
echo '' >> $file
echo '### Generated by _../generate-requirements.sh_' >> $file
echo '' >> $file
echo '```' >> $file
sed "s/^#.*$projectname/# /" $tmpfile >> $file # Strip physical location from file paths (requires double quotes to resolve the variables inside the replacement string)
echo '```' >> $file
rm -f $tmpfile

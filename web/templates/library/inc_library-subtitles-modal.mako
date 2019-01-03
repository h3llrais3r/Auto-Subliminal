<div id="subtitlesModal" class="modal fade" tabindex="-1">

    <div class="modal-dialog">

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3 class="modal-title">Save hardcoded subtitle languages</h3>
            </div>

            <div class="modal-body">
                <span>Select 1 or more hardcoded subtitle languages:</span>
                <span v-if="selectedHardcodedLanguages.length > 0">{{ selectedHardcodedLanguages }}</span>
                <br><br>
                <select v-model="selectedHardcodedLanguages" class="form-control input-sm" multiple>
                    <option v-for="language in languages" :value="language.alpha2">
                        {{ language.name + ' (' + language.alpha2 + ')' }}
                    </option>
                </select>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-default" @click="saveHardcodedSubtitles($event)">Save</button>
            </div>

        </div>

    </div>

</div>
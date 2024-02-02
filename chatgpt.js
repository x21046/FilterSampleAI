const API_KEY = 'sk-';
const URL = "https://api.openai.com/v1/chat/completions";

function getQueryParams(queryString) {
    const params = {};
    const vars = queryString.split("&");
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair.length == 2) {
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
    }
    return params;
}

function getCurrentFilterQuery() {
    const sliders = {
        'bri-range': 'bri',
        'sat-range': 'sat',
        'con-range': 'con',
        'hue-range': 'hue',
        'gra-range': 'gra',
        'sep-range': 'sep',
        'inv-range': 'inv',
        'blu-range': 'blu',
        'opa-range': 'opa'
    };
    const queryParams = new URLSearchParams();
    for (const [param, slider] of Object.entries(sliders)) {
        const value = document.querySelector('#' + slider + '-range').value;
        queryParams.set(param, value);
    }
    return '?' + queryParams.toString();
}

function updateSlidersFromQueryParams(queryParams) {
    const sliderValues = {};
    for (const key in queryParams) {
        const slider = document.querySelector('#' + key);
        if (slider) {
            slider.value = queryParams[key];
            slider.dispatchEvent(new Event('input'));
            // 状態を保存するための値を集める
            sliderValues[key] = slider.value;
        }
    }
    // APIからの応答に基づく新しい状態を保存
    undoRedoManager.saveState(sliderValues);
}

function updateSlidersWithJSON(sliderValues) {
    for (const key in sliderValues) {
        const slider = document.querySelector('#' + key);
        if (slider) {
            slider.value = sliderValues[key];
            slider.dispatchEvent(new Event('input'));
        }
    }
}

function updateURLWithSliderValues(sliderValues) {
    const queryParams = new URLSearchParams();
    for (const key in sliderValues) {
        queryParams.set(key, sliderValues[key]);
    }
    history.pushState(null, '', '?' + queryParams.toString());
}

function displayResult(inputText, found) {
    const resultDiv = document.querySelector('.filter-result');
    if (found) {
        resultDiv.innerHTML = '<p style="margin-bottom: 30px;">「' + inputText + '」のフィルター生成結果</p>';
    } else {
        resultDiv.innerHTML = '<p style="margin-bottom: 30px;">該当するフィルターが見つかりませんでした。</p>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateSlidersFromQueryParams(getQueryParams(window.location.search.substring(1)));
    
    const submitButton = document.querySelector('#submit-button');
    const filterInput = document.querySelector('#filterInput');
    const actionSelect = document.querySelector('#action-select');
    const filterLabel = document.querySelector('#filterLabel');
    const upText = document.querySelector('#uptext');
    const downText = document.querySelector('#downtext');

    submitButton.addEventListener('click', function(event) {
        const inputText = filterInput.value;
        const action = actionSelect.value;
        let sendText;
        const currentFilterQuery = getCurrentFilterQuery();
        const resultDiv = document.querySelector('.filter-result');
        const responseDiv = document.querySelector('.response-result');

        if (action === 'create') { //生成
            resultDiv.innerHTML = '<p style="margin-bottom: 30px;">フィルター生成中・・・</p>';
            sendText = 'Change the filter values (currently default values) in the following query format to generate a "' + inputText + '" filter. The range is (brightness : 0-200, saturation : 0-200, contrast : 0-200, hue : 0-360, grayscale : 0-100, sepia : 0-100, invert : 0-100, blur : 0.0-1.0, opacity : 0-100 ) to ensure that each value is not excessively changed from the initial value. Output different values in the following format. ?bri-range=100&sat-range=100&con-range=100&hue-range=0&gra-range=0&sep-range=0&inv-range=0&blu-range=0&opa-range=100';
        } else { //修正
            resultDiv.innerHTML = '<p style="margin-bottom: 30px;">フィルター修正中・・・</p>';
            const currentFilterQuery = getCurrentFilterQuery();
            sendText = 'Please modify the following query format filter slightly to be closer to' + inputText + '. The range is (brightness : 0-200, saturation : 0-200, contrast : 0-200, hue : 0-360, grayscale : 0-100, sepia : 0-100, invert : 0-100, blur : 0.0-1.0, opacity : 0-100 ). The following are the current values, so please modify them based on this and output in the same format. "' + currentFilterQuery + '".';
        }

        async function getResponse() {
            try {
                const response = await axios.post(
                    URL,
                    {
                        "model": "gpt-4",
                        "messages": [
                            { "role": "user", "content": sendText }
                        ]
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${API_KEY}`,
                        },
                    }
                );
                var chatgpt_response = response.data.choices[0].message.content;

                //responseDiv.innerHTML = '<p style="margin-bottom: 30px;">' + chatgpt_response + '</p>';
                const queryMatch = chatgpt_response.match(/\?bri-range=\d+&sat-range=\d+&con-range=\d+&hue-range=\d+&gra-range=\d+&sep-range=\d+&inv-range=\d+&blu-range=\d+(\.\d+)?&opa-range=\d+/);

                if (queryMatch) {
                    const queryParams = getQueryParams(queryMatch[0].substring(1));
                    updateSlidersFromQueryParams(queryParams);
                    updateURLWithSliderValues(queryParams);
                    displayResult(inputText, true);
                } else {
                    displayResult(inputText, false);
                }

            } catch (error) {
                console.log(error);
            }
        }
        getResponse();
    });
});
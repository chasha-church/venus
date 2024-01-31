import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { newsAPI } from '../../api/newsAPI';
import { GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';

type NewsState = {
    pageSize: number;
    newsPage: number;
    news: Array<NewsItemType>;
}

export type NewsItemType = {
    "news_content_id": number,
    "title": string,
    "text": string,
    "view_data": string | null,
    "main_asset_url": string,
    "assets_url": string[],
    "created_date": string,
    "created_by_id": number,
    "updated_date": string,
    "updated_by_id": number
}

const initialState: NewsState = {
    pageSize: 3,
    newsPage: 0,
    news: [],
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        // setSidebarExpanded: (state, action: PayloadAction<boolean>) => {
        //     state.sidebarExpanded = !action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload;
            state.newsPage += 1;
        })
    }
})

// Actions
export const { } = newsSlice.actions

// Asynchronous actions

type FetchNewsPayload = {
    pageSize: number;
    page: number;
}

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async ({ pageSize, page }: FetchNewsPayload, thunkAPI) => {
        const response = await newsAPI.getNews(pageSize, page);
        // debugger;
        // return response.data;
        const mockResponse = {
            "count": 272,
            "total_count": 272,
            "page_size": 3,
            "page_number": 1,
            "next": "https://cc-neptune-39e02856f5ff.herokuapp.com/api/v1/news/?page=2&page_size=3",
            "previous": null,
            "results": [
                {
                    "news_content_id": 281,
                    "title": "Лыжный «Пробег трезвости» ",
                    "text": "    Главным организатором пробега выступил приход иконы Божией Матери «Неупиваемая Чаша» г.Минска и его настоятель протоиерей Дионисий Пясецкий, руководитель Координационного центра Белорусской Православной Церкви по противодействию наркомании и алкоголизму в честь мученика Вонифатия. Пробег собрал более 50 участников всех возрастов, много молодежи. Очень радовала и согревала дружеская атмосфера мероприятия. Несмотря на то, что пробег проходил в форме прогулки без учета времени, дух соревнования присутствовал в полной мере, каждый хотел показать свой лучший результат и хорошую физическую форму. Но самое главное, что участники пробега пришли семьями, чтобы не просто пробежать на лыжах и хорошо провести свободное время, а показать свою общественную позицию по вопросу трезвости, дать личный пример подрастающему поколению и выразить свою заботу о будущем Беларуси.",
                    "view_data": null,
                    "main_asset_url": "https://chashaby.s3.eu-central-1.amazonaws.com/IMG-9b68ea401f9f75eada5634d256889953-V.jpg",
                    "assets_url": [
                        "https://chashaby.s3.eu-central-1.amazonaws.com/IMG-12db0f9598001b1a0ac684c2183493e6-V.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/20220220_000207.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/IMG_8885.JPG",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/IMG_8914.JPG",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/IMG-9b68ea401f9f75eada5634d256889953-V.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/IMG-e3b5810594db2c2f3624d42cb07af8c9-V.jpg"
                    ],
                    "created_date": "2022-02-21T17:59:19Z",
                    "created_by_id": 1,
                    "updated_date": "2023-11-29T15:43:22Z",
                    "updated_by_id": 1
                },
                {
                    "news_content_id": 282,
                    "title": "Посещение выставки «Венценосная семья. Путь любви». ",
                    "text": "    Выставка посвящена истории дома Романовых, а также жизни последнего Российского императора Николая II Александровича и его августейшей семьи. Созданная в Могилевской епархии, выставка уже экспонировалась во многих городах России и Беларуси. Основная ее идея – показать высокий пример христианской семьи, жизнь, наполненную верой, любовью и служением народу.",
                    "view_data": null,
                    "main_asset_url": "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_21-19-17.jpg",
                    "assets_url": [
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_21-19-17.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_21-19-20.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_21-19-23.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_21-59-27.jpg"
                    ],
                    "created_date": "2022-03-01T16:42:04Z",
                    "created_by_id": 1,
                    "updated_date": "2023-11-29T15:43:14Z",
                    "updated_by_id": 1
                },
                {
                    "news_content_id": 283,
                    "title": "Масленица в приходе храма иконы Божией Матери \"Неупиваемая чаша\"",
                    "text": "    Начались масленичные гуляния с красивого обряда Величания молодоженов, т.е. пар, вступивших в брак в течение года. Под пение многолетия молодые пары прошли под покровом из рушников, символизирующих молитвенный покров Богородицы и святых, а также молитвенное ходатайство родителей и близких об их семейном благополучии. Встречали молодых опытные семейные пары, много лет прожившие в браке, с теплыми поздравлениями и наставлениями. В завершение, молодожены получили благословение священника на дальнейшие труды по созиданию своей семьи. Далее празднование Масленицы переместилось на открытую площадку перед храмом. Помимо традиционного блинного изобилия и ароматного чая из самовара, всех гостей праздника ждали масленичные песни, хороводы и веселые развлечения, где каждый мог проверить себя на силу, ловкость и сноровку. Конечно же, традиционных для Масленицы кулачных боев не устраивали, но свою богатырскую силу участники праздника могли испытать в импровизированных «петушиных боях», сражениях на булавах и перетягивании каната. Прощаясь с зимой, участники гуляния старались как можно дальше забросить валенки, а кроме того еще и как можно более метко: за выбитые валенком кегли метатели валенок получали сладкие угощения. Последнюю пробежку на лыжах по асфальту вообще можно считать самым популярным развлечением из всех предложенных. Катание на лыжах по асфальту – дело не простое, особенно если одна пара лыж приходится сразу на троих участников. Необычный лыжный пробег доставил много удовольствия как участникам, так и зрителям. Как и полагается, масленичные гуляния прошли шумно и весело, напоминая всем участникам о райской радости, которую, к сожалению, утратили Адам и Ева после изгнания из Эдемского сада, и призывая всех нас устремиться к достижению Вечной радости трудами предстоящего поста.",
                    "view_data": null,
                    "main_asset_url": "https://chashaby.s3.eu-central-1.amazonaws.com/ggggggggggggg.jpg",
                    "assets_url": [
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-03-01_19-32-19.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-03-01_19-32-23.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-03-01_19-32-26.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_19-50-16.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_19-50-22.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_19-52-50.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_21-32-52.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_21-32-51.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_19-58-02.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_20-00-29.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_19-54-47.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_20-05-05.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_21-32-50.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_21-33-16.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_21-33-17.jpg",
                        "https://chashaby.s3.eu-central-1.amazonaws.com/photo_2022-02-28_21-33-18.jpg"
                    ],
                    "created_date": "2022-03-01T18:36:50Z",
                    "created_by_id": 1,
                    "updated_date": "2023-11-29T15:43:10Z",
                    "updated_by_id": 1
                }
            ]
        }
        return mockResponse.results;
    }
);

// Selectors
export const selectCurrentNews = (state: RootState) => state.news.news;
export const selectNewsPageSize = (state: RootState) => state.news.pageSize;
export const selectNextNewsPage = (state: RootState) => state.news.newsPage + 1;

// Reducer
export const newsReducer = newsSlice.reducer;